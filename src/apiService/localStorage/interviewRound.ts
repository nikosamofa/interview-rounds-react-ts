import { InterviewRounds } from "@/types/interviewRound";

export const INTERVIEW_ROUNDS_KEY_NAME = "INTERVIEW_ROUNDS";
export const QA_LIST_KEY_NAME = "QA_LIST";

export const qaListKeyName = (id: number) =>
  `${INTERVIEW_ROUNDS_KEY_NAME}/${id}/${QA_LIST_KEY_NAME}`;

export const INTERVIEW_ROUNDS: InterviewRounds = [
  {
    id: 1,
    title: "Screening",
    status: "UNLOCKED",
    statusUpdatedAt: "2024-01-02T20:00:00.000Z",
    fittingRoleIds: null,
    order: 1,
  },
  {
    id: 2,
    title: "Round 1: Technical Interview",
    status: "LOCKED",
    statusUpdatedAt: null,
    fittingRoleIds: null,
    order: 2,
  },
  {
    id: 3,
    title: "Round 2: Cultural Interview",
    status: "LOCKED",
    statusUpdatedAt: null,
    fittingRoleIds: null,
    order: 3,
  },
  {
    id: 4,
    title: "Final Round: Cultural Interview",
    status: "LOCKED",
    statusUpdatedAt: null,
    finalRoleId: null,
    order: 4,
  },
];
