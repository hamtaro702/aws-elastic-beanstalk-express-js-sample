
import { getUser } from './github'

describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return getUser('hamtaro702')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Koen van Gilst')
    })
  })
})