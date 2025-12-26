import { Linkedin } from 'lucide-react';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  hasVoted: boolean;
  onVote: (candidateId: string) => void;
}

export default function CandidateCard({ candidate, hasVoted, onVote }: CandidateCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        hasVoted ? 'opacity-75' : ''
      }`}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={candidate.image}
          alt={candidate.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            !hasVoted ? 'hover:scale-105' : ''
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{candidate.name}</h2>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">{candidate.bio}</p>

        {/* Actions */}
        {hasVoted ? (
          <div className="bg-gray-100 text-gray-600 text-center py-3 rounded-full font-medium">
            Already Voted
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={() => onVote(candidate.id)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full transition-colors shadow-md"
            >
              Vote
            </button>
            <a
              href={candidate.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 border-2 border-linkedin-blue text-linkedin-blue rounded-full hover:bg-linkedin-blue hover:text-white transition-colors"
              style={{ borderColor: '#0A66C2' }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

