#!/usr/bin/env python3
import os
import glob

def delete_typescript_files(directory):
    """Delete all .ts files in the given directory and its subdirectories"""
    # Find all .ts files recursively
    pattern = os.path.join(directory, '**', '*.ts')
    ts_files = glob.glob(pattern, recursive=True)
    
    print(f"Found {len(ts_files)} TypeScript files to delete:")
    
    deleted_count = 0
    error_count = 0
    
    for file_path in ts_files:
        try:
            os.remove(file_path)
            print(f"✓ Deleted: {file_path}")
            deleted_count += 1
        except Exception as e:
            print(f"✗ Error deleting {file_path}: {e}")
            error_count += 1
    
    print(f"\nDeletion completed:")
    print(f"- Successfully deleted: {deleted_count} files")
    print(f"- Errors: {error_count} files")

if __name__ == "__main__":
    src_directory = "/Users/choeseonghyeon/WebstormProjects/baekjoon-typescript/src"
    delete_typescript_files(src_directory)