import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import { expect } from 'chai';
import { Sparklines } from '../src/Sparklines';
import jsdom from 'jsdom'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

describe('Sparklines', () => {

    it('should render nothing without data', () => {
        const sparklines = TestUtils.renderIntoDocument(<Sparklines />);
        expect(ReactDOM.findDOMNode(sparklines)).to.be.null;
    });

    it('is rendered as svg', () => {
        const sparklines = TestUtils.renderIntoDocument(<Sparklines data={[1]}/>);
        expect(ReactDOM.findDOMNode(sparklines).tagName).to.eq('svg');
    });

});
