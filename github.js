class Github{
  constructor(){
    this.client_id = '8a074d6f8ee46acc2890';
    this.client_secret = '58bc21c5f2baaf1676a417b6509639708dfd8b63';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`);
    
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repo = await repoResponse.json();

    return{
      profile,
      repo
    }
  }
}