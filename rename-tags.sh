#!/bin/bash

echo "Renaming Git tags to SemVer format..."

# Helper function to rename a tag
rename_tag() {
  old_tag=$1
  new_tag=$2

  # Get the commit and message of the old tag
  commit=$(git rev-list -n 1 "$old_tag")
  message=$(git for-each-ref refs/tags/$old_tag --format='%(contents)')

  echo "Renaming $old_tag → $new_tag @ $commit"

  # Delete old tag locally and remotely
  git tag -d "$old_tag"
  git push origin :refs/tags/"$old_tag"

  # Create new tag with same commit and message
  git tag -a "$new_tag" "$commit" -m "$new_tag: ${message}"

  # Push new tag to origin
  git push origin "$new_tag"
}

# List of tags to rename
rename_tag v1  v0.1.0
rename_tag v2  v0.1.1
rename_tag v3-dribbble v0.1.2
rename_tag v4-pre-layout v0.1.3
rename_tag v5-SiteShell v0.2.0
rename_tag v6-stable-config v0.2.1
rename_tag v7-about-page v0.3.0
rename_tag v8-deploy-ready v0.3.1
rename_tag v9-first-version-online v0.4.0
rename_tag v10-first-deployment-fix v0.4.1
rename_tag v11-style-tidy v0.4.2
rename_tag v12-reset-clean v0.5.0
rename_tag v13-type-system-established v0.5.1
rename_tag v14-type-system-complete v0.5.2
rename_tag v21-dynamic-titles-complete v0.5.3

echo "✅ All tags renamed and pushed."
