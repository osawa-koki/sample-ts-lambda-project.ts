import { expect } from 'chai'
import { lambdaHandler } from '../../app'

const event = JSON.parse(`{}`)
const context = JSON.parse(`{}`)
const callback= (): void  => {}

describe('Tests index', function () {
  it('verifies successful response', async () => {
    const result = await lambdaHandler(event, context, callback)

    if (result == null) throw new Error('result is null')

    expect(result).to.be.an('object')
    expect(result.statusCode).to.equal(200)
    expect(result.body).to.be.an('string')

    const response = JSON.parse(result.body)

    expect(response).to.be.an('object')
    expect(response.message).to.be.equal("hello world")
  })
})
