import { Voter } from '../types';

export const mockVoters: Voter[] = [
  {
    id: '1',
    name: 'Alice Thompson',
    email: 'alice@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Thompson&background=2563eb&color=fff',
    votedAt: '2024-01-15T10:30:00Z',
    candidateId: '1',
    candidateName: 'Sarah Johnson',
  },
  {
    id: '2',
    name: 'Bob Martinez',
    email: 'bob@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Martinez&background=22c55e&color=fff',
    votedAt: '2024-01-15T11:15:00Z',
    candidateId: '2',
    candidateName: 'Michael Chen',
  },
  {
    id: '3',
    name: 'Carol White',
    email: 'carol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Carol+White&background=f59e0b&color=fff',
    votedAt: '2024-01-15T12:00:00Z',
    candidateId: '1',
    candidateName: 'Sarah Johnson',
  },
  {
    id: '4',
    name: 'David Lee',
    email: 'david@example.com',
    avatar: 'https://ui-avatars.com/api/?name=David+Lee&background=8b5cf6&color=fff',
    votedAt: '2024-01-15T13:20:00Z',
    candidateId: '3',
    candidateName: 'Emily Rodriguez',
  },
  {
    id: '5',
    name: 'Eva Garcia',
    email: 'eva@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Eva+Garcia&background=ec4899&color=fff',
    votedAt: '2024-01-15T14:10:00Z',
    candidateId: '4',
    candidateName: 'David Kim',
  },
];

