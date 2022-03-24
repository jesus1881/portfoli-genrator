const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);


const printProfileData = profileDataArr => {
    profileDataArgs.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);