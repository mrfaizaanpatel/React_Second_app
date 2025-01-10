import React, { useEffect, useState } from 'react';
function GitHubCard() {
    let [gitHubData,setGitHubData]=useState({});
    let [repositories,setRepositories]=useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/MohammadRayyanMalik")
        .then(data=>data.json())
        .then(data=>{
            setGitHubData(data)
            // setRepositories(data.repos_url)
            // Repository
            fetch(data.repos_url)
            .then(repos=>repos.json())
            .then(repos=>{
                // console.log("Repos "+repos);
                setRepositories(repos);
            })
            // console.log(gitHubData)
         
        })
    },[])
    return (
        <div>
            {/*Profile:Start */}
            <h1>Github profile</h1>
            <div className="card github-card" >
                <img src={gitHubData.avatar_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Name:{gitHubData.name}</p>
                    <p className="card-text">Followers:{gitHubData.followers}</p>
                    <a href={gitHubData.html_url}>Click Area to visit GitHub Profile</a>
                </div>
            </div>
            {/*Profile:Start */}

            {/*Repository:Start */}

            <table className="table">
  <thead>
    <tr>
      <th scope="col">Repository Name</th>
      <th scope="col">Repository Link</th>
     
    </tr>
  </thead>
  <tbody>
    {repositories.map((repoObj)=>{
        return( <tr>
            <th scope="row"></th>
            <td></td>
            
          </tr>)
    })}
   
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>

            {/*Repository:End */}
        </div>
    )
}

export default GitHubCard;