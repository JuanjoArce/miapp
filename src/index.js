import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './components/Button';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Primary', ()=> (
     <Button 
       buttonType='primary'
     onClick={action('click')}>
     Obten Premium
     </Button>
))
