import {render, screen} from "@testing-library/react";

import List from './List';

const data = ['html5', 'css', 'js']
//grouping tests
describe('List components', () => {
  //actual tests we can also declare them like test() instead of it()
  it('List render', () => {
    //checking if component List renders without problems
    render(<List items={data}/>)
    //checking if there is a list rendered in the screen
    expect(screen.getByRole('list')).toBeInTheDocument()
    //checking if there is a text 'html' in the screen
    expect(screen.getByText(/html/)).toBeInTheDocument()
  });

  it('List renders without data', () => {
    render(<List/>);
    //we use here queryByRole instead of getByRole because we can use getByRole when we are
    // sure that what we are looking for is on the page
    expect(screen.queryByRole("list")).toBeNull();
  });

  it('List snapshot', () => {
    const list = render(<List items={data}/>)

    expect(list).toMatchSnapshot();
  });

  it('List empty snapshot', () => {
    const list = render(<List/>);

    expect(list).toMatchSnapshot();
  })
});
