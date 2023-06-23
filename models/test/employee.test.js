const Employee = require('../employee.model');
const expect = require('chai').expect;

describe('Employee', () => {

  it('should throw an error if no "firstName" arg', () => {
    const dep = new Employee({}); 
    dep.validate(err => {
      expect(err.errors.firstName).to.exist;
    });
  });

  it('should throw an error if no "lastName" arg', () => {
    const dep = new Employee({});
    dep.validate(err => {
      expect(err.errors.lastName).to.exist;
    });
  });

  it('should throw an error if no "department" arg', () => {
    const dep = new Employee({}); 
    dep.validate(err => {
      expect(err.errors.department).to.exist;
    });
  });

  it('should throw an error if "firstName" is not a string', () => {
    const cases = [{}, []];
    for(let firstName of cases) {
      const dep = new Employee({ firstName });
      dep.validate(err => {
        expect(err.errors.firstName).to.exist;
      });
    }
  });

  it('should throw an error if "lastName" is not a string', () => {
    const cases = [{}, []];
    for(let lastName of cases) {
      const dep = new Employee({ lastName });
      dep.validate(err => {
        expect(err.errors.lastName).to.exist;
      });
    }
  });

  it('should throw an error if "department" is not a string', () => {
    const cases = [{}, []];
    for(let department of cases) {
      const dep = new Employee({ department });
      dep.validate(err => {
        expect(err.errors.department).to.exist;
      });
    }
  });

  it('should not throw an error if "firstName", "lastName" and "department" is okay', () => {
    const cases = [
      { firstName: 'Jan', lastName: 'Nowak', department: 'Tester' },
      { firstName: 'Anna', lastName: 'Kowalska', department: 'Marketing' }
    ];
    for(let name of cases) {
      const dep = new Employee( name );
      dep.validate(err => {
        expect(err).to.not.exist;
      });
    }
  });
  
});