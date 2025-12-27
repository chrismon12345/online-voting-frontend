export interface Candidate {
  id: string;
  name: string;
  bio: string;
  image: string;
  linkedinUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Voter {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  votedAt: string;
  candidateId: string;
  candidateName: string;
}

