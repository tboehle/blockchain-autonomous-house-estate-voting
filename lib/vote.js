/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction
 * @param {org.thorben.voting.vote} voteTransaction
 * @transaction
 */
function vote(voteTransaction) 
{
    // Depending on name, update candidate assets
    if(voteTransaction.candidateVoteAsset.bezeichnungAbstimmung == "GartenbauAbstimmung")
    {
        if(vote.voteTransaction.voterParticipant.stimmeGarten == false)
        {
            voteTransaction.candidateVoteAsset.totalVote = voteTransaction.candidateVoteAsset.totalVote + 1;

            return getAssetRegistry('org.thorben.voting.GartenbauAbstimmung')
            .then(function (assetRegistry) 
            {
                return assetRegistry.update(voteTransaction.GartenbauAbstimmung);
            })
            .then(function () 
            {
                return getParticipantRegistry('org.thorben.voting.voter')
                    .then(function (participantRegistry) 
                    {
                        voteTransaction.voterParticipants.stimmeGarten = true;
                        return participantRegistry.update(voteTransaction.voter);
                    })
            });

        }
        else
        {
            throw new Error("You've already participated in the Gartenbauabstimmung");
        }
        
    }
    if(voteTransaction.candidateVoteAsset.bezeichnungAbstimmung == "PolitischeAbstimmung")
    {
        if(vote.voteTransaction.voterParticipant.stimmePolitisch == false)
        {
            voteTransaction.candidateVoteAsset.totalVote = voteTransaction.candidateVoteAsset.totalVote + 1;

            return getAssetRegistry('org.thorben.voting.PolitischeAbstimmung')
            .then(function (assetRegistry) 
            {
                return assetRegistry.update(voteTransaction.PolitischeAbstimmung);
            })
            .then(function () 
            {
                return getParticipantRegistry('org.thorben.voting.voter')
                    .then(function (participantRegistry) 
                    {
                        voteTransaction.voterParticipants.stimmePolitisch = true;
                        return participantRegistry.update(voteTransaction.voter);
                    })
            });
        }
        else
        {
            throw new Error("You've already participated in the politischen Abstimmung");
        }
    }
    if(voteTransaction.candidateVoteAsset.bezeichnungAbstimmung == "StraßenAbstimmung")
    {
        if(vote.voteTransaction.voterParticipant.stimmeStraße == false)
        {
            voteTransaction.candidateVoteAsset.totalVote = voteTransaction.candidateVoteAsset.totalVote + 1;

            return getAssetRegistry('org.thorben.voting.StraßenAbstimmung')
            .then(function (assetRegistry) 
            {
                return assetRegistry.update(voteTransaction.StraßenAbstimmung);
            })
            .then(function () 
            {
                return getParticipantRegistry('org.thorben.voting.voter')
                    .then(function (participantRegistry) 
                    {
                        voteTransaction.voterParticipants.stimmeStraße = true;
                        return participantRegistry.update(voteTransaction.voter);
                    })
            });
        }
        else
        {
            throw new Error("You've already participated in the Straßenabstimmung");
        }
    }
    else
    {
        throw new Error("Sorry, this voting object doesn't exist");
    }         
}