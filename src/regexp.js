//intro
{

    const abcdef = new RegExp('abcdef')
    const regexp = /abcdef/
    console.log(abcdef instanceof RegExp)
    console.log(regexp instanceof RegExp)

    console.log(regexp.toString() === '/abcdef/')
    console.log(regexp.source === 'abcdef')

    console.log(abcdef.test('abcdef'))
    console.log(abcdef.test('ABCDEF'))
    console.log(abcdef.test('start abcdef end'))

}

// flags -> i and g
// i -> case insensitive
// g -> global
// m,s,u,y -> rarely used
{
    const abcdef = new RegExp('abcdef','i')
    const regexp = /abcdef/i
    
    console.log(regexp.test('abcdef'))
    console.log(regexp.test('abCdEf'))

    const foo = /foo/
    const fooG = /foo/g

    const str = 'table football, foosbal'
    console.log(str.match(foo)?.length)

    //match all will work with global flag
    try{
        console.log(str.matchAll(foo))
    }catch (e){
        console.log(e)
    }

    console.log([...str.matchAll(fooG)].length)

    //combine flags with RegExp
    const simple = /simple/i
    const simpleG = new RegExp(simple.source,simple.flags+'g')
    console.log(simpleG)
}

// seeing all regexp functions
{

    console.log(/abc/.test('abc'))
    console.log(/abc/.test('1abc1'))

    //search returns the index, if not found returns -1
    console.log('abc'.search(/abc/))
    console.log('_abc'.search(/abc/))
    console.log('xyz'.search(/abc/))

    console.log('abc'.match(/foo/))
    const match = 'games Football foosball'.match(/foo/i)
    console.log(match?.[0])
    console.log(match?.index)

    console.log([...'abc'.matchAll(/foo/g)]);
    const matchAll = 'games Football foosball'.matchAll(/foo/ig);
    
    for(const match of matchAll){
    console.log(match)
       console.log(match[0])
       console.log(match.index) 
    }

    console.log('abcabc'.replace(/a/i,'A'))
    console.log('abcabc'.replaceAll(/a/gi,'A'))
    console.log('BhArath'.split(/a/i))

}
//group match
{

    const str = 'Pixel Resolution: 1920x1080'

    const simple =  str.match(/\d+x\d+/)
    console.log(simple?.length)
    console.log(simple?.[0])

    const grouped =  str.match(/(\d+)x(\d+)/)
    console.log(grouped?.length)
    console.log(grouped?.[0])
    console.log(grouped?.[1])
    console.log(grouped?.[2])
    // @ts-ignore
    const [value,width,height] = grouped
    console.log({value,width,height})

    const multi = `
    HD: 1920x1080
    4K: 3840x2160
    `
    const matches = multi.matchAll(/(\d+)x(\d+)/g);
    for(const match of matches){
        const [value, width, height] = match;
        console.log({value, width, height})
    }
}