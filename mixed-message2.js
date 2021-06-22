const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];//array of days
const weather = ['sunny', 'cloudy', 'snowy','clear'];//array of weather types
const activity = ['running', 'walking', 'jogging', 'shopping']; // array of activities

//generate and return a random message
const generateRandomMessage = () => {
    return `Today is ${dayOfWeek[Math.floor(Math.random() * dayOfWeek.length)]} and the weather is ${weather[Math.floor(Math.random() * weather.length)]}. We can go ${activity[Math.floor(Math.random() * activity.length)]}.`;
};

console.log(generateRandomMessage());