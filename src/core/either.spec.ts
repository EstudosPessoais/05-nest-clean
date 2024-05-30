import { Either, left, rigth } from './either'

function doSomething(ShouldSuccess: boolean): Either<string, number> {
  if (ShouldSuccess) {
    return rigth(10)
  } else {
    return left('error')
  }
}

test('success result', () => {
  const result = doSomething(true)

  expect(result.isRight()).toEqual(true)
})

test('error result', () => {
  const result = doSomething(false)

  expect(result.isLeft()).toEqual(true)
  expect(result.isRight()).toEqual(false)
})
