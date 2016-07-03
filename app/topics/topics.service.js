angular.module('app.modules')
  .service('topicsService',topicsService);

function topicsService ($http, $state, $document, APP_CONST) {
  var service = {
    fetchAll: fetchAll,
    fetchByMonth: fetchByMonth,
    fetchBySkipAndLimit : fetchBySkipAndLimit,
    fetchAvailableMonths : fetchAvailableMonths
  };
  
  return service;

  function fetchAll(){
    return $http.get(APP_CONST.api + 'v1/topics');
  }

  function fetchBySkipAndLimit(skip ,limit){
    return $http.get(APP_CONST.api + 'v1/topics?sort=-time&skip=' + skip + '&limit=' + limit +'&select=-content');
  }

  function fetchByMonth(yymm, duration){
    return $http.get(APP_CONST.api + 'topics/yymm/' + yymm + '/duration/' + duration);
  }

  function fetchAvailableMonths(){
    return $http.get(APP_CONST.api + 'topics/months');
  }

}
