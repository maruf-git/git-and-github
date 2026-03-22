// change user name and email
// git config user.name "orion"
// git config user.email "orion@gmail.com" // dummy


// Configuration Levels
// There are three levels of configuration:

// System (all users): git config --system
// Global (current user): git config --global
// Local (current repo): git config --local


// Changing or Unsetting Config Values
// To change a value, just run the git config command again with the new value.
// To remove a setting, use --unset:
// Example: Unset an Alias
// git config --global --unset code.editor


// Default Branch Name
// Set the default branch name for new repositories (for example, main instead of master):
// Example: Set Default Branch Name
// git config --global init.defaultBranch main