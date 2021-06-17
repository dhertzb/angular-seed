export default {
  getPassengers: () => {
    return $http.get(
      "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
    );
  },
};
