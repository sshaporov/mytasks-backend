import * as fs from 'fs'

export const readJsonFromFile = (fileName: string) => {
  // возвращаем промис а внутри промиса стрелочную функцию которую обещаю выполнить
  return new Promise((resolve,reject) => {
    fs.readFile(`./src/${fileName}`, (err, buf) => {
      if (err) {
        console.log(`server - error read from ${fileName}`,err)
        reject(err)
      } else {
        console.log(`server - successfully read from ${fileName}`)
        resolve(JSON.parse(buf.toString()))
      }
    })
  })
}
export const writeJsonToFile = (fileName: string, data: any) => {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(`./src/${fileName}`, JSON.stringify(data), (err) => {
      if (err) {
        console.log(`server - error written to ${fileName}`, err)
        reject(err)
      } else {
        console.log(`server - successfully written to ${fileName}`)
        resolve()
      }
    })
  })
}
