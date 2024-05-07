// 会话管理模块，负责AI Server交互，控制workflow流向

class sessionService {
  private sessionId: number;

  constructor(sessionId: number) {
    this.sessionId = sessionId;
  }

  public getSessionId() {
    return this.sessionId;
  }
  public setSessionId(sessionId: number) {
    this.sessionId = sessionId;
  }
}
export default sessionService;
