/*
function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
*/



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
