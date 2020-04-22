import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'http://some-release.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
