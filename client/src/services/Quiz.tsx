import Quizzepository from "../repositories/Quiz"


class QuizService{
    private quizRepository:any
    constructor() {
        this.quizRepository = new Quizzepository();
    }
    async getAll() {
        const data = await this.quizRepository.getAll();
        return data;
      }
}
export default QuizService