function getFirstSelector(selector) {
  var firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  var nestedTarget = document.querySelector("#nested")
  var target = nestedTarget.querySelector(".target")
  return target
}

function increaseRankBy(n) {
  const rank = document.querySelector('#app').querySelectorAll('.ranked-list')
  const rankChildOne = rank[0].children
  const rankChildTwo = rank[1].children
      for (var i = 0; i < rankChildOne.length; i++) {
      rankChildOne[i].innerHTML = parseInt(rankChildOne[i].innerHTML) + n
  }
      for (var j = 0; j < rankChildTwo.length; j++) {
      rankChildTwo[j].innerHTML = parseInt(rankChildTwo[j].innerHTML) + n
  }
}

function deepestChild() {
  const div = document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
  return div
}
