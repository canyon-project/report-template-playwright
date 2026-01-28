import {test as baseTest} from '@playwright/test';
import {createCoverageContextFixture} from '@canyonjs/playwright'

export const test = baseTest.extend({
    context: createCoverageContextFixture({
        outputDir:'.canyon_output'
    }),
    headless:false
});

export const expect = test.expect;

