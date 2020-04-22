import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.debug('I am running the right function')
    core.setOutput('release-url', 'http://some-release.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
