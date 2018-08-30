/**
 * @fileOverview Test accordion sections with snapshots & shallow rendering
 * @author Ram Pasala<ram.pasala7@gmail.com>
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Accordion from '../src/Accordion/amp/Accordion';
import AccordionSection from '../src/Accordion/amp/AccordionSection';
import AccordionSectionContent from '../src/Accordion/amp/AccordionSectionContent';
import AccordionSectionTrigger from '../src/Accordion/amp/AccordionSectionTrigger';

// test accordion sections shallow rendering & snapshots

it('should render Accordion correctly', () => {
  const accordion = shallow(<Accordion />);
  expect(accordion.find('div')).toHaveLength(1);
  expect(accordion).toMatchSnapshot();
});

it('should render AccordionSection correctly', () => {
  const accordionSectionTriggerTree = renderer
    .create(<AccordionSection />)
    .toJSON();
  const accordionSection = shallow(<AccordionSection />);
  expect(accordionSection.find('AccordionSection__AccordionSectionContainer')).toHaveLength(1);
  expect(accordionSection.find('input[id^="__LEAF_UI__accordion-trigger-input"]')).toHaveLength(1);
  expect(accordionSection.find('input[type="radio"]')).toHaveLength(1);
  expect(accordionSectionTriggerTree).toMatchSnapshot();
});

it('should render AccordionSectionContent correctly', () => {
  const accordionSectionTriggerTree = renderer
    .create(<AccordionSectionContent />)
    .toJSON();
  expect(accordionSectionTriggerTree).toMatchSnapshot();
});

it('should render AccordionSectionTrigger correctly', () => {
  const accordionSectionTriggerTree = renderer
    .create(<AccordionSectionTrigger />)
    .toJSON();
  expect(accordionSectionTriggerTree).toMatchSnapshot();
});
