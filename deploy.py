#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deploy script: Upload dist/ to server via SFTP using paramiko
"""
import os
import paramiko
from pathlib import Path

# Config
HOST = "31.97.102.179"
PORT = 22
USER = "palma"
PASS = "Moodle2026*"
REMOTE_BASE = "/var/www/html/socket-studio/demo-aplicaciones"
PROJECT_NAME = "camara-comercio-santo-domingo"
REMOTE_PATH = f"{REMOTE_BASE}/{PROJECT_NAME}"
LOCAL_DIST = Path(__file__).parent / "dist"

def upload_dir(sftp, local_dir, remote_dir):
    """Recursively upload a local directory to remote."""
    try:
        sftp.mkdir(remote_dir)
        print(f"  Created: {remote_dir}")
    except Exception:
        pass  # Already exists

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_item = f"{remote_dir}/{item}"

        if os.path.isfile(local_path):
            sftp.put(local_path, remote_item)
            # Set permissions
            sftp.chmod(remote_item, 0o644)
            size = os.path.getsize(local_path)
            print(f"  OK: {item} ({size:,} bytes)")
        elif os.path.isdir(local_path):
            upload_dir(sftp, local_path, remote_item)

def main():
    print(f"\n{'='*60}")
    print("DEPLOY: Camara de Comercio Santo Domingo")
    print(f"{'='*60}")
    print(f"Local:  {LOCAL_DIST}")
    print(f"Remote: {REMOTE_PATH}")
    print(f"{'='*60}\n")

    if not LOCAL_DIST.exists():
        print("Error: dist/ folder not found. Run 'npm run build' first.")
        import sys; sys.exit(1)

    # Connect
    print("Connecting to server...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        ssh.connect(HOST, PORT, USER, PASS, timeout=30)
        print("Connected!\n")
    except Exception as e:
        print(f"Connection failed: {e}")
        import sys; sys.exit(1)

    sftp = ssh.open_sftp()

    # Create project directory
    print(f"Setting up remote directory...")
    stdin, stdout, stderr = ssh.exec_command(
        f"mkdir -p {REMOTE_PATH} && chmod 755 {REMOTE_PATH}"
    )
    stdout.read()

    # Clear old files
    print("Clearing old files...")
    stdin, stdout, stderr = ssh.exec_command(
        f"rm -rf {REMOTE_PATH}/* 2>/dev/null; echo done"
    )
    stdout.read()

    # Upload files
    print(f"\nUploading files...\n")
    upload_dir(sftp, str(LOCAL_DIST), REMOTE_PATH)

    # Set folder permissions
    stdin, stdout, stderr = ssh.exec_command(
        f"find {REMOTE_PATH} -type d -exec chmod 755 {{}} \\; && find {REMOTE_PATH} -type f -exec chmod 644 {{}} \\;"
    )
    stdout.read()

    sftp.close()
    ssh.close()

    print(f"\n{'='*60}")
    print("DEPLOY COMPLETADO!")
    print(f"{'='*60}")
    print(f"URL: https://socket-studio.com/demo-aplicaciones/{PROJECT_NAME}")
    print(f"{'='*60}\n")

if __name__ == "__main__":
    main()
