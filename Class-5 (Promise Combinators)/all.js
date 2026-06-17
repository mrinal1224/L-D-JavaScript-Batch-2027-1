// Promise.all

function fetchUserStories() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 2000);
  });
}

function fetchUserPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
  });
}

function fetchUserComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 1;
      if (success) {
        resolve(["Nice!", "Interesting post", "Subscribed!"]);
      } else {
        reject("Failed to fetch comments ❌");
      }
    }, 800);
  });
}

// Promise.all

Promise.allSettled([fetchUserStories(), fetchUserPosts(), fetchUserComments()]).then(
  function (result) {
    console.log(result);
  }
).catch(function(err){
    console.log(err)
});

Promise.all([fetchUserStories(), fetchUserPosts(), fetchUserComments()]).then(
    function (result) {
      console.log(result);
    }
  ).catch(function(err){
      console.log(err)
  });
  

// Get Asignment Scores
// Get Contest Scores
// Get Attendance
