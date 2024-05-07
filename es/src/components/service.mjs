class sessionService {
  constructor(sessionId) {
    this.sessionId = sessionId;
  }
  getSessionId() {
    return this.sessionId;
  }
  setSessionId(sessionId) {
    this.sessionId = sessionId;
  }
}
export { sessionService as default };
