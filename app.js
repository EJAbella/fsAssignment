var fs = require('fs');

// Challenge 1
// let data = fs.readFileSync('./challenge1/info.txt', 'utf-8')
// console.log(data)

// Challenge 2
// let data = fs.readFileSync('./challenge2/info.txt', 'utf-8')
// data = data + 'Elijah\nSeth\nTodd\nAlbert\nLauren\nChelsea\nJake\nNhan\nDonnie\nJosh\nTyler'
// fs.writeFileSync('./challenge2/info.txt', data)

// Challenge 3
// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt')

// Challenge 4
// fs.mkdirSync('./challenge4/copyfolder')
// let data = fs.readFileSync('./challenge4/info.txt', 'utf-8')
// fs.writeFileSync('./challenge4/copyfolder/info.txt', data)

// Challenge 5
// let data = fs.readFileSync('./challenge5/info.txt', 'utf-8')
// data = data.replace(/-/g, ' ')
// fs.writeFileSync('./challenge5/info.txt', data)

// Challenge 6
// let files = fs.readdirSync('./challenge6')
// files = files.filter((file) => file.match('.txt'))
// files.forEach((file) => {
//   console.log(fs.readFileSync(`./challenge6/${file}`, 'utf-8'))
// })
