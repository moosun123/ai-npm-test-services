declare class sessionService {
    private sessionId;
    constructor(sessionId: number);
    getSessionId(): number;
    setSessionId(sessionId: number): void;
}
export default sessionService;
