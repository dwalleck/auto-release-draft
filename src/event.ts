import * as github from '@actions/github'
import * as core from '@actions/core'

export function getCreatedTag(): string | undefined {
  if (github.context.eventName !== 'create') {
    return undefined
  }

  if (github.context.payload.ref_type !== 'tag') {
    core.info('The created reference was a branch, not a tag')
    return undefined
  }

  return github.context.payload.ref
}
