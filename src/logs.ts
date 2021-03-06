import chalk from 'chalk'

type projectName = string

const logSuccessMkDir = (projectName: projectName) => {
  console.log(``)
  console.log(``)
  console.log(
    `ð${chalk.bgBlack.green(
      `Success`
    )}: ${projectName}ãã©ã«ãã®ä½æã«æåãã¾ããï¼ð`
  )
}

const logStartDevelopment = () => {
  console.log(``)
  console.log(`ðä»¥ä¸ã®ã³ãã³ãã§å®è£éå§ð`)
}

const logForLanding = (projectName: projectName) => {
  logStartDevelopment()
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
}

const logForWordpress = (projectName: projectName) => {
  console.log(``)
  console.log(`â Docker Desktopãã¤ã³ã¹ãã¼ã«ã®ä¸â `)
  console.log(
    `${chalk.underline.cyan(`https://www.docker.com/products/docker-desktop`)}`
  )
  logStartDevelopment()
  console.log(`${chalk.bgBlack.green(1)}: ${chalk.white(`cd ${projectName}`)}`)
  console.log(`${chalk.bgBlack.green(2)}: ${chalk.white(`pnpm install`)}`)
  console.log(`${chalk.bgBlack.green(3)}: ${chalk.white(`pnpm run start`)}`)
  console.log(`${chalk.bgBlack.green(4)}: ${chalk.white(`pnpm run dev`)}`)
  console.log(``)
  console.log(
    `${chalk.bgBlack.green('URL')}: ${chalk.white(
      `http://localhost:3001/wp-admin`
    )}`
  )
  console.log(`${chalk.bgBlack.green('ID')}: ${chalk.white(`admin`)}`)
  console.log(`${chalk.bgBlack.green('PW')}: ${chalk.white(`password`)}`)
  console.log(``)
}

export { logSuccessMkDir, logStartDevelopment, logForLanding, logForWordpress }
