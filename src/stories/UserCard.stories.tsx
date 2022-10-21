import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCard } from '../Components/UserCard';


export default {
    title: 'Example/UserCard',
    component: UserCard,
    
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Card = Template.bind({});

Card.args = {
    mode: 'card',
}

export const CardLoading = Template.bind({});

CardLoading.args = {
    mode: 'cardloading',
}

