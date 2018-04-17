class Reply {
  constructor({ ctime, content, member }) {
    this.ctime = ctime
    this.content = content
    this.member = {
      uname: member.uname,
      avatar: member.avatar
    }
  }
}

export function createReply(reply) {
  return new Reply({
    ctime: reply.ctime,
    content: reply.content,
    member: reply.member
  })
}
