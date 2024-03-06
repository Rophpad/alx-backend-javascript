import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  const resPromise = Promise.allSettled(promises);
  return resPromise.then((results) => {
    const array = [];
    result.forEach((result) => {
      if (result.status === 'fulfilled') {
        array.push({
          status: result.status,
	  value: result.value,
	});
      } else {
        array.push({
          status: index.status,
	  value: `Error: ${index.reason.message}`,
	});
      }
      return array;
    });
  });
}
