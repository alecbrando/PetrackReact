import React from 'react';
import PetInformationItem from './PetInformationItem';

const PetDetailList = props =>
  <>
    <h2>Details</h2>
    <dl>
        <PetInformationItem name="Name" value={props.pet.name}/>
        <PetInformationItem name="Name" value={props.pet.age}/>
        <PetInformationItem name="Name" value={props.pet.PetType.type}/>
    </dl>
  </>
;

PetDetailList.defaultProps = {
    pet: {
        PetType:{}
    },
  };

export default PetDetailList;