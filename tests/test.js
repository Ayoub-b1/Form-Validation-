const assert = require('assert');
const Verification = require('../main');

describe('Verification', () => {
    describe('checkmail()', () => {
        it('should return true for a valid email', () => {
            const verifier = new Verification('test@example.com', 'password');
            assert.strictEqual(verifier.checkmail(), true);
        });

        it('should return false for an invalid email', () => {
            const verifier = new Verification('invalid-email', 'password');
            assert.strictEqual(verifier.checkmail(), false);
        });
    });

    describe('passlen()', () => {
        it('should return true for a password with length >= 5', () => {
            const verifier = new Verification('test@example.com', 'password');
            assert.strictEqual(verifier.passlen(5), true);
        });

        it('should return false for a password with length < 5', () => {
            const verifier = new Verification('test@example.com', 'pass');
            assert.strictEqual(verifier.passlen(5), false);
        });
    });

    describe('passmatch()', () => {
        it('should return true for matching passwords', () => {
            const verifier = new Verification('test@example.com', 'password');
            assert.strictEqual(verifier.passmatch('password'), true);
        });

        it('should return false for non-matching passwords', () => {
            const verifier = new Verification('test@example.com', 'password');
            assert.strictEqual(verifier.passmatch('wrongpassword'), false);
        });
    });

    describe('checkphone()', () => {
        it('should return true for a valid phone number', () => {
            const verifier = new Verification('test@example.com', 'password', '+1234567890');
            assert.strictEqual(verifier.checkphone(), true);
        });

        it('should return false for an invalid phone number', () => {
            const verifier = new Verification('test@example.com', 'password', '123');
            assert.strictEqual(verifier.checkphone(), false);
        });
    });
});
