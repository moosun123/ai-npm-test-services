// 会话管理模块，负责AI Server交互，控制workflow流向
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
export default sessionService;
//# sourceMappingURL=service.js.map