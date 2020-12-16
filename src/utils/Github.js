
const axios = require('axios')

const getGithubOrgs = async ()=>{
    const response = await axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU')
    console.log(response);
}

// getGithubOrgs()

const getGithubRepos = async ()=>{
    const response = await axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU/repos')
    console.log(response);
}
// getGithubRepos()

const getGithubMember = async ()=>{
    const response = await axios.get('https://api.github.com/orgs/Microsoft-Student-Partner-HU/members')
    console.log(response);

}
// getGithubMember()

const getGithubRepo = async (name)=>{
    const response = await axios.get(`https://api.github.com/repos/Microsoft-Student-Partner-HU/${name}`)
    console.log(response);
}
// getGithubRepo('')

/*
  ***********
  ngOnInit() {
    this.api.githubOrgs().pipe().subscribe(data=> {
      this.orgs = data
    })
    this.api.githubRepos().pipe().subscribe(data=> {
      this.repos = data
      this.repos.forEach(x => {
        this.api.githubRepo(x.name).pipe().subscribe(data => {
          this.customeRepos.push(data)
          console.log(this.customeRepos)
        })
      })
    })
    this.api.githubMember().pipe().subscribe(data=> {
      this.members = data
    })
  }
*/