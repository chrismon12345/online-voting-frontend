import { useState } from 'react';
import { Info } from 'lucide-react';
import Header from './Header';
import CandidateCard from './CandidateCard';
import VotersList from './VotersList';
import { User } from '../types';
import { mockCandidates } from '../data/mockData';
import { mockVoters } from '../data/mockVoters';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [votedCandidateId, setVotedCandidateId] = useState<string | null>(null);

  const handleVote = (candidateId: string) => {
    // In a real app, this would call an API
    setVotedCandidateId(candidateId);
    // Show success message or toast notification
    alert('Vote submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vote for Your Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your preferred candidate. You can only vote once.
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {mockCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              hasVoted={votedCandidateId !== null}
              onVote={handleVote}
            />
          ))}
        </div>

        {/* Info Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg">
            <Info className="w-5 h-5" />
            <span className="font-medium">Your vote is secure and anonymous</span>
          </div>
        </div>

        {/* Voters List */}
        <div className="mt-12">
          <VotersList voters={mockVoters} />
        </div>
      </main>
    </div>
  );
}

