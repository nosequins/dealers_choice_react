const Problem = require('./problem')
const db = require('./db')

const syncAndSeed= async()=>{
    await db.sync({force:true})
    const [fujita, rota, moser,pompeiu, borsuk]= await Promise.all([
        Problem.create({author:'Takao Fujita',
        name:'Fujita conjecture', description:'In complex geometry, the conjecture states that for a positive holomorphic line bundle L on a compact complex manifold M, the line bundle KM ⊗ L⊗m (where KM is a canonical line bundle of M) is'+
        'spanned by sections when m ≥ n + 1 ; very ample when m ≥ n + 2,where n is the complex dimension of M.', year: 1985}), Problem.create({author:'Gian-Carlo Rota', name:'Rota\'s basis conjecture',
        description:'it states that, if X is either a vector space of dimension n or more generally a matroid of rank n, with n disjoint bases Bi, then it is possible to'+
        'arrange the elements of these bases into an n × n matrix in such a way that the rows of the matrix are exactly the given bases and the columns of the matrix are also bases. That is, it should be possible to find a second set of'+ 
        'n disjoint bases Ci, each of which consists of one element from each of the bases Bi.', year:1994, visual:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Rota%27s_basis_conjecture_2.svg/800px-Rota%27s_basis_conjecture_2.svg.png'},
        Problem.create({author:'Leo Moser', name:'Moser\'s worm problem', description:'The problem asks for the region of smallest area that can accommodate every plane curve of length 1. Here "accommodate" means that the curve may be rotated and translated to fit inside the region.',
        year:1966, visual:'https://images.squarespace-cdn.com/content/v1/57a9d8dcd482e9bbf179f445/1480944832213-5WGDB12BYNY14IEJY29N/ke17ZwdGBToddI8pDm48kID2TqOZGUXrpH-HFZFPTHBZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHSDZ0ljAuSmwTB1xiPSraczjcFm57A3yTtVC-Ho1u9ad1lH3P2bFZvTItROhWrBJ0/image-asset.png?format=500w'}),
        Problem.create({author:'Dimitrie Pompeiu', name:'Pompeiu problem', description:'Suppose f is a nonzero continuous function defined on a Euclidean space, and K is a simply connected Lipschitz domain, so that the integral of f vanishes on every congruent copy of K. Then the domain is a ball.',
        year:1929 }), Problem.create({author:' Karol Borsuk', name:'Borsuk\'s conjecture', description:'Can every bounded subset E of the space R ^n'+
        'be partitioned into (n + 1) sets, each of which has a smaller diameter than E?', year:1932, visual:'https://64.media.tumblr.com/79fd12427c49903e00f9122295bf32f4/tumblr_inline_p8ofzx0JvR1s0x50x_500.png'}))
    ])
}
module.exports= {db, Problem, syncAndSeed};