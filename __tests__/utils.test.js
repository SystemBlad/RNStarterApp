import { getInitials } from '../app/utils/stringUtils'

test('getInitials', () => {
  expect(getInitials('Jhon Smith')).toBe('JS')
  expect(getInitials('New York')).toBe('NY')
  expect(getInitials('')).toBe('')
  expect(getInitials(null)).toBe('')
  expect(getInitials(999)).toBe('')
})