#!/bin/bash
set -euo pipefail

GITHUB_TOKEN=$(gh auth token) npm install
gh auth token | docker login ghcr.io -u oauth --password-stdin
