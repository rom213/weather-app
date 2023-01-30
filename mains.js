let s=0,produ=['roma','yuca','platano']
let product=['yuca']
let t=[]
        for (const iterator of produ) {
            for (const i of product) {
                if (iterator!=i) {
                    t.push(iterator)
                }
            }
        }
        console.log(t);