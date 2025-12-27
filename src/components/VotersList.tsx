import { Users, Clock } from 'lucide-react';
import { Voter } from '../types';

interface VotersListProps {
  voters: Voter[];
}

export default function VotersList({ voters }: VotersListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (voters.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600">No voters yet. Be the first to vote!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Recent Voters</h2>
        <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          {voters.length} {voters.length === 1 ? 'voter' : 'voters'}
        </span>
      </div>

      <div className="space-y-4">
        {voters.map((voter) => (
          <div
            key={voter.id}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
          >
            <img
              src={voter.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(voter.name)}&background=2563eb&color=fff`}
              alt={voter.name}
              className="w-12 h-12 rounded-full border-2 border-gray-200"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">{voter.name}</p>
              <p className="text-sm text-gray-500 truncate">{voter.email}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatDate(voter.votedAt)}
                </span>
                <span className="text-xs text-blue-600 font-medium">
                  Voted for: {voter.candidateName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

