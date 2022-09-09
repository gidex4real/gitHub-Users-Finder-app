class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user){
    // console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class='row'>
          <div class='col-md-3'>
            <img src="${user.avatar_url}" alt="user img" class="img-fluid mb-2">
            <a href="${user.html_url}" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    `
  };

  // Show user repos
  showRepos(repos){
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_black">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge bg-success">Forks: ${repo.form_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  } 

  // Show alert message
  showAlert(message, className){
    // Clear reoccuring alert message
    this.clearALert();

    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text 
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert before the search div
    container.insertBefore(div, search);

    // Timeout after 3 sec to clear alert message
    setTimeout(() => {
      this.clearALert();
    }, 3000);
  }

  // Clear Alert message
  clearALert(){
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile(){
    this.profile.innerHTML = "";
  }
}