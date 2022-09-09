// Initiate Github class
const github = new Github();
// Initiate UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', eventHandler);

function eventHandler(event) {
  // Get input text
  const userText = event.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert 
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repo);
        }
      })
  }else {
    // Clear profile
    ui.clearProfile();  
  }
  }
